import SpecificationModel from "./specification.model";
import ReviewModel from "./review.model";

export default interface ContentDescriptionModel {
  id: string,
  description_text: string[],
  specification_info: SpecificationModel[],
  reviews: ReviewModel[];
  video_link: string;
}
