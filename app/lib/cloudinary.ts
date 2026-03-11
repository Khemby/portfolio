const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
};

/**
 * Build a Cloudinary delivery URL.
 *
 * @param publicId  The public ID you see in the Cloudinary dashboard
 *                  e.g. "portfolio/spxfit/preview" or "portfolio/vortexeai/full"
 * @param options   Optional width, height, quality, format transforms
 *
 * Usage:
 *   cloudinaryUrl("portfolio/spxfit/preview", { width: 600, format: "auto" })
 *   → https://res.cloudinary.com/<cloud>/image/upload/w_600,f_auto,q_auto/portfolio/spxfit/preview
 */
export function cloudinaryUrl(publicId: string, options: ImageOptions = {}): string {
  const { width, height, quality = 80, format = "auto" } = options;

  const transforms = [
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    `q_${quality}`,
    `f_${format}`,
    "c_fill",
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/**
 * Build a Cloudinary video delivery URL.
 *
 * @param publicId  The public ID in the Cloudinary dashboard
 * @param options   Optional width, quality transforms
 */
export function cloudinaryVideoUrl(publicId: string, options: Pick<ImageOptions, "width" | "quality"> = {}): string {
  const { width, quality = 70 } = options;

  const transforms = [
    width ? `w_${width}` : null,
    `q_${quality}`,
    "f_auto",
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transforms}/${publicId}`;
}
