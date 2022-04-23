import * as S from './styles';

function Watch({ Watch }) {
  // Render Watch...
  return (
    <S.Container>
        <h1>Hello WOrld</h1>
    </S.Container>
  )
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get Watchs
//   const res = await fetch('https://.../Watchs')
//   const Watchs = await res.json()

//   // Get the paths we want to pre-render based on Watchs
//   const paths = Watchs.map((Watch) => ({
//     params: { id: Watch.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the Watch `id`.
//   // If the route is like /Watchs/1, then params.id is 1
//   const res = await fetch(`https://.../Watchs/${params.id}`)
//   const Watch = await res.json()

//   // Pass Watch data to the page via props
//   return { props: { Watch } }
// }

export default Watch
