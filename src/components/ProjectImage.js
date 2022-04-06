import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export default function ProjectImage({filename, alt}) {
    return (
      <StaticQuery
        query={graphql`
        query {
            images: allFile {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    gatsbyImageData(
                        width: 500
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        )
                  }
                }
              }
            }
          }
        `}
        render = {data => {
            const file = data.images.edges.find((edge) => {
                return edge.node.relativePath.includes(filename)});
            const image = getImage(file.node);       
            if (!image) {return null};
            return <GatsbyImage image={image} alt={alt} />;
            }}
      />
    )
  }