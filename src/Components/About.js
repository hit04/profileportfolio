import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import LoadingImage from "../assets/wavy-loading.gif"
import LoadingImage1 from "../assets/law society.png"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
export default function About() {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
    name,
    bio,
    "authorImage":image.asset->url
}`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    });
    if (!author) return (<div style={{textAlign:"center" , color:"red", fontWeight:"bolder" ,margin:"150px"}}>Loading . . .</div>);

    return (
        <main className="relative " >        
            <div className="p-10 lg:pt-4 mx-auto  containerAboutMe"  >
                <section className=" rounded-lg  p-20 " >
                   <div className="lg:flex"> <img src={urlFor(author.authorImage).url()}  className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lg  flex-column justify-center">
                        <p> <h1 className="cursive text-6xl text-black mb-4" style={{textShadow:"2px 2px 5px blue"}}>
                            Know more about {""} <span className="text-black" >{author.name}</span>
                        </h1></p>
                        <br/>
                        <p className=" text-black " style={{textShadow:"0 0 2px blue"}}>
                            <BlockContent blocks={author.bio} projectId="8oix0qv6" dataset="production" />
                        </p>
                    </div>
                    </div>
                </section>
            </div>
        </main>
    );
}