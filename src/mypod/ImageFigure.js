function ImageFigure(props) {
  return (
    <figure>
      <img
        src={props.LargeImageSrc}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <figcaption>{props.children}</figcaption>
    </figure>
  );
}

export default ImageFigure;
