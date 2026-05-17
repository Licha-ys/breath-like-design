export function getProductImage(product) {
  return product.archiveImage || product.imageCutout || product.image;
}
