 export async function get ({params}:any) {
  console.log({params});
  return {
    body: {
      item: 'clean'
    }
  };
}
