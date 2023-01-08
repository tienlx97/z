import {MetaDataType} from 'feature/study-engine/type';
import {QuestionElement} from '../types';

const elementType = (
  element: QuestionElement
): {
  audio: any;
  image: any;
  location: any;
  text: any;
} =>
  element.attributes.reduce(
    (pre, curr) => {
      switch (curr.type) {
        case MetaDataType.AUDIO_ATTRIBUTE:
          pre.audio = curr;
          break;
        case MetaDataType.IMAGE_ATTRIBUTE:
          pre.image = curr;
          break;
        case MetaDataType.LOCATION_ATTRIBUTE:
          pre.location = curr;
          break;
        case MetaDataType.TEXT_ATTRIBUTE:
          pre.text = curr;
          break;
        default:
          throw new Error('Unsupported Media Attribute: ' + pre + '.');
      }

      return pre;
    },
    {} as {
      audio: any;
      image: any;
      location: any;
      text: any;
    }
  );

function find(attributes: any, t: any) {
  return attributes.find((e: any) => e.type === t);
}

const getTextValue = (questionElement: QuestionElement) => {
  var t;
  return (t = find(questionElement.attributes, MetaDataType.TEXT_ATTRIBUTE)) ==
    null
    ? undefined
    : t.plainText;
};

function textAttributeGreater(questionOption: any, num: number) {
  var s, n, a;
  return (
    (null !=
    (s =
      null ==
        (n = find(questionOption.attributes, MetaDataType.TEXT_ATTRIBUTE)) ||
      null == (a = n.plainText)
        ? undefined
        : a.length)
      ? s
      : 0) > num
  );
}

function getOptionTextAttribute(option: any) {
  return (
    option.attributes.filter(
      (opt: any) => opt.type === MetaDataType.TEXT_ATTRIBUTE
    ).length > 0
  );
}

const getImageAttributeUrl = (element: QuestionElement) => {
  let imageAttribute = find(element.attributes, MetaDataType.IMAGE_ATTRIBUTE);
  return imageAttribute == null ? undefined : imageAttribute.url;
};

function getTextAttributePlainText(element: QuestionElement) {
  let textAttribute = find(element.attributes, MetaDataType.TEXT_ATTRIBUTE);
  return textAttribute == null ? undefined : textAttribute.plainText;
}

function getTextAttributeLanguageCode(element: QuestionElement) {
  let textAttribute = find(element.attributes, MetaDataType.TEXT_ATTRIBUTE);
  return textAttribute == null ? undefined : textAttribute.languageCode;
}

export const QuestionElementUtils = {
  elementType,
  getTextValue,
  getOptionTextAttribute,
  textAttributeGreater,
  getImageAttributeUrl,
  getTextAttributePlainText,
  getTextAttributeLanguageCode,
};
