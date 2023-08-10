import beian_strings from './strings.json';
/**
 * 获取一个经过备案的字符串，如果此字符串未备案，将抛出错误
 */
function sb(str: string): string {
  if(beian_strings.includes(str)) {
    return str;
  } else {
    throw new Error(`"${str}" 没有经过备案，暂时无法使用`);
  }
}

export default sb;