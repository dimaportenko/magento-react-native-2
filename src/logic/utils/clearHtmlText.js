/**
 * @flow
 * Created by Dima Portenko on 13.05.2020
 */

export const clearHtmlText = (text: string): string => {
  return text.replace(/\&(.*?);/gm, '');
};
