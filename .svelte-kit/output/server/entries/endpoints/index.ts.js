async function get({ params }) {
  console.log({ params });
  return {
    body: {
      item: "clean"
    }
  };
}
export { get };