export const EmailValidator = (email: string) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  };

export const createIban = () => {
    return 0e0500000+Math.random();
}