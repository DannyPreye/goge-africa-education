// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from "@sanity/client"
export default sanityClient({
  projectId: "mvkamjeg",
  dataset: "production",
  useCdn: true
})
