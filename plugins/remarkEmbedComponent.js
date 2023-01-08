const visit = require('unist-util-visit');
const fs = require('fs');

function isDir(path) {
  try {
    var stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

export const remarkEmbedComponent = ({root, params}) => {
  return (tree) => {
    visit(tree, 'mdxJsxFlowElement', (node) => {
      if (node.name === 'VItemSrc') {
        const item = node.attributes.filter((f) => f.name === 'src2Base64');
        if (item.length === 1) {
          let lastDirectory = root;
          let i = 0;
          while (i < params.length && isDir(lastDirectory + '/' + params[i])) {
            lastDirectory = lastDirectory + params[i] + '/';
            i++;
          }
          const data = fs.readFileSync(lastDirectory + item[0].value, 'base64');
          item[0].value = data;
        }
      }
    });
  };
};
