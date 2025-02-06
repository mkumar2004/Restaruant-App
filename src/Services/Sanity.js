import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"


export const client =createClient({
  projectId: "782e9oee",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:'skjL8JqvDUjTP3DDIWXf33bKNgzZT1R5Pl9GXBoBHNw2RqIW6ni3QGgiYx5YuHP2GIyrovY8Jkz9fREcM2lYRxy9t7LCer2YVJ2vy53BbudnS1g5y2T1aT0Jec903cSLSXQuyrH6DBgV5BhCTNzHcIhlQqkISB54GWeiqovYuzpbQTK2aT0Q'
});

const builder=imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);

export default client;