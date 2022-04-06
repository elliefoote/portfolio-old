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
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
          }
        `}
        render = {data => {
            console.log('The filename is ' + filename);
            const file = data.images.edges.find((edge) => {
                console.log('The relative path is ' + edge.node.relativePath);
                return edge.node.relativePath.includes(filename)});
            console.log('The file is ' + file.node.name);
            const image = getImage(file.node);
            console.log(image);        
            if (!image) {return null};
            return <GatsbyImage image={image} alt={alt} />;
            }}
      />
    )
  }