import { QuestionElement } from "../types";
import { QuestionElementUtils } from "../utils/question-element-utils";
import { FormattedTextWithImage, Position } from "./FormattedTextWithImage";
import cn from "classnames";

export const QuestionElementViewSpace = {
  DEFAULT: "default",
  LARGE: "large",
  SMALL: "small",
};

type QuestionElementViewProps = {
  alignment?: typeof Position.Top | typeof Position.Center;
  onClick: () => void;
  questionElement: QuestionElement;
  shouldImageBeZoomable?: boolean;
  textfit?: { min: number; max: number; mode: string };
  variant:
    | typeof QuestionElementViewSpace.DEFAULT
    | typeof QuestionElementViewSpace.LARGE
    | typeof QuestionElementViewSpace.SMALL;
};

const Textfit = { min: 20, max: 20, mode: "multi" };

export const QuestionElementView = ({
  alignment = Position.Top,
  onClick,
  questionElement,
  shouldImageBeZoomable,
  textfit = Textfit,
  variant = QuestionElementViewSpace.DEFAULT,
}: QuestionElementViewProps) => {
  if (!questionElement) {
    return null;
  }

  const { location, text, image } =
    QuestionElementUtils.elementType(questionElement);

  const isText = !!text;

  return location ? (
    // DiagramWrapper
    <div
      className={cn("relative min-h-[17.5rem]", "max-[20rem]:min-h-[11.25rem]")}
    >
      {/* ./app/j/lazy/QuestionLocationLazy.ts */}
    </div>
  ) : (
    // TextWrapper
    <div
      data-testid="Question Text"
      className={cn("items-stretch flex-1 break-words", {
        "cursor-pointer": onClick,
        "cursor-auto": !onClick,
        "[@media(max-width:20rem)]:min-h[11.25rem]":
          variant === QuestionElementViewSpace.LARGE,
      })}
      onClick={onClick}
    >
      <FormattedTextWithImage
        alignment={alignment}
        clickToZoom={shouldImageBeZoomable == null || shouldImageBeZoomable}
        imageHeight={isText ? 120 : undefined}
        /**
          imageHeight: j ? 120 : undefined,
          imageShape: j ? "square" : "original",
          imageSize: j ? "s" : "m",
          imageUrl: null == S ? undefined : S.url, 
          */
        imageUrl={image == null ? undefined : image.url}
        lang={text == null ? undefined : text.languageCode}
        richText={text == null ? undefined : text.richText}
        text={text == null ? undefined : text.plainText}
        textfit={textfit}
      />
    </div>
  );
};
