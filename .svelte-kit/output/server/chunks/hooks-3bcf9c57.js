function getSession(event) {
  console.log("here session about !!");
  return event.locals.user ? {
    user: {
      name: event.locals.user.name,
      email: event.locals.user.email,
      avatar: event.locals.user.avatar
    }
  } : {};
}
export { getSession };
