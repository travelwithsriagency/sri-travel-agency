const userAuthPanel = document.getElementById('userAuthPanel');
const bookingForm = document.getElementById('contactForm');
const bookingAuthPrompt = document.getElementById('bookingAuthPrompt');
let pendingBooking = false;
let pendingBookingPackage = '';
let pendingBookingState = '';
let pendingBookingSpot = '';

const authMessage = (error) => ({
  'auth/email-already-in-use': 'An account already exists for this email.',
  'auth/invalid-credential': 'Invalid email or password.',
  'auth/invalid-login-credentials': 'Invalid email or password.',
  'auth/operation-not-allowed': 'Email/password sign-in is disabled. Enable it in Firebase Authentication > Sign-in method.',
  'auth/unauthorized-domain': 'This website domain is not authorized in Firebase Authentication settings.',
  'auth/network-request-failed': 'Network error. Check your internet connection and try again.',
  'auth/too-many-requests': 'Too many attempts. Wait a moment and try again.',
  'auth/weak-password': 'Use a password with at least 8 characters.',
  'auth/user-not-found': 'No account exists for this email.'
}[error.code] || error.message);

const returnToHome = () => {
  window.location.hash = '#home';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const authPersistence = firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => null);

const createUserRecord = async (user, details = {}) => {
  await firebaseDb.collection('users').doc(user.uid).set({
    uniqueId: user.uid,
    name: details.name || user.displayName || '',
    email: user.email || details.email || '',
    phone: details.phone || '',
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
};

if (userAuthPanel) {
  const userLoginForm = document.getElementById('userLoginForm');
  const userRegisterForm = document.getElementById('userRegisterForm');
  const userLoginTab = document.getElementById('userLoginTab');
  const userRegisterTab = document.getElementById('userRegisterTab');
  const userAccountDetails = document.getElementById('userAccountDetails');
  const userLoginMessage = document.getElementById('userLoginMessage');
  const userRegisterMessage = document.getElementById('userRegisterMessage');
  const userForgotPassword = document.getElementById('userForgotPassword');
  const userLogout = document.getElementById('userLogout');
  const accountNavLink = document.getElementById('accountNavLink');

  const setMessage = (element, message) => { element.textContent = message; };
  const showMode = (mode) => {
    const register = mode === 'register';
    userLoginForm.hidden = register;
    userRegisterForm.hidden = !register;
    userLoginTab.classList.toggle('active', !register);
    userRegisterTab.classList.toggle('active', register);
  };

  const showAccount = (user) => {
    const signedIn = Boolean(user);
    if (bookingForm) bookingForm.hidden = !signedIn;
    if (bookingAuthPrompt) bookingAuthPrompt.hidden = signedIn;
    if (accountNavLink) accountNavLink.textContent = signedIn ? 'My account' : 'Sign in';
    document.body.classList.toggle('authenticated', signedIn);
    userLoginForm.hidden = signedIn;
    userRegisterForm.hidden = signedIn;
    userLoginTab.hidden = signedIn;
    userRegisterTab.hidden = signedIn;
    userAccountDetails.hidden = !signedIn;
    if (signedIn) {
      document.getElementById('userAccountEmail').textContent = user.email || '';
      document.getElementById('userAccountId').textContent = user.uid;
    }
  };

  const continueAfterAuthentication = () => {
    if (!pendingBooking) {
      returnToHome();
      return;
    }
    const stateSelect = document.getElementById('contactState');
    if (stateSelect && pendingBookingState) {
      stateSelect.value = pendingBookingState;
      stateSelect.dispatchEvent(new Event('change'));
    }
    const selectedPlace = [...document.querySelectorAll('#spotPicker input')].find((input) => input.value === pendingBookingSpot);
    if (selectedPlace) {
      selectedPlace.checked = true;
      selectedPlace.dispatchEvent(new Event('change'));
    }
    const packageSelect = document.getElementById('contactPackage');
    if (packageSelect) packageSelect.value = pendingBookingPackage || 'custom';
    if (pendingBookingState && pendingBookingSpot) {
      document.dispatchEvent(new CustomEvent('trip-place-selected', {
        detail: { state: pendingBookingState, place: pendingBookingSpot }
      }));
    }
    pendingBooking = false;
    pendingBookingPackage = '';
    pendingBookingState = '';
    pendingBookingSpot = '';
    window.location.hash = '#contact';
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const bookingLink = event.target.closest('a[data-requires-auth]');
    if (!bookingLink || firebaseAuth.currentUser) return;

    event.preventDefault();
    pendingBooking = true;
    pendingBookingPackage = bookingLink.closest('[data-package]')?.dataset.package || '';
    pendingBookingState = bookingLink.dataset.state || '';
    pendingBookingSpot = bookingLink.dataset.spot || '';
    showMode('login');
    setMessage(userLoginMessage, 'Sign in or create an account to continue with your trip.');
    window.location.hash = '#account';
  });

  userLoginTab.addEventListener('click', () => showMode('login'));
  userRegisterTab.addEventListener('click', () => showMode('register'));

  userLoginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage(userLoginMessage, 'Signing in...');
    try {
      await authPersistence;
      await firebaseAuth.signInWithEmailAndPassword(
        document.getElementById('userLoginEmail').value.trim(),
        document.getElementById('userLoginPassword').value
      );
      setMessage(userLoginMessage, '');
      continueAfterAuthentication();
    } catch (error) {
      setMessage(userLoginMessage, authMessage(error));
    }
  });

  userRegisterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage(userRegisterMessage, 'Creating account...');
    try {
      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const email = document.getElementById('userRegisterEmail').value.trim();
      const credential = await firebaseAuth.createUserWithEmailAndPassword(email, document.getElementById('userRegisterPassword').value);
      await credential.user.updateProfile({ displayName: name });
      await createUserRecord(credential.user, { name, email, phone });
      setMessage(userRegisterMessage, 'Account created. Your unique ID is shown below.');
      continueAfterAuthentication();
    } catch (error) {
      setMessage(userRegisterMessage, authMessage(error));
    }
  });

  userForgotPassword.addEventListener('click', async () => {
    const email = document.getElementById('userLoginEmail').value.trim();
    if (!email) return setMessage(userLoginMessage, 'Enter your email first, then choose forgot password.');
    try {
      await firebaseAuth.sendPasswordResetEmail(email);
      setMessage(userLoginMessage, 'Password reset instructions were sent to your email.');
    } catch (error) {
      setMessage(userLoginMessage, authMessage(error));
    }
  });

  userLogout.addEventListener('click', () => firebaseAuth.signOut());
  firebaseAuth.onAuthStateChanged(showAccount);
}
