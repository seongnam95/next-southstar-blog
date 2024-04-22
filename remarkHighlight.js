import { visit } from 'unist-util-visit';

function remarkHighlight() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const newNodes = [];
      const parts = node.value.split(/==(.+?)==/g);

      parts.forEach((part) => {
        console.log(part);
        if (part.match(/==(.+?)==/)) {
          newNodes.push({
            type: 'html',
            value: `<mark>${part.replace(/==/g, '')}</mark>`,
          });
        } else {
          newNodes.push({
            type: 'text',
            value: part,
          });
        }
      });

      // Replace the original text node with the array of new nodes
      parent.children.splice(index, 1, ...newNodes);
    });
  };
}

export default remarkHighlight;
