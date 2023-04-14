// collects block elements into a 2 dimensional array
export const mapBlockToArray = (block) => {
    const array = [];
    const rows = Array.from(block.children);
    rows.forEach((row) => {
        array.push(Array.from(row.children));
    });
    return array;
};
export const getColumn = (columnIndex, blockSrc) => {
    if (blockSrc.length && blockSrc[0].length > columnIndex) {
        return blockSrc.reduce((column, row) => {
            if (row[columnIndex]) {
                column.push(row[columnIndex]);
            }
            return column;
        }, []);
    }
    return [];
};

export function createTag(tag, attributes, html) {
    const el = document.createElement(tag);
    if (html) {
      if (html instanceof HTMLElement
        || html instanceof SVGElement
        || html instanceof DocumentFragment) {
        el.append(html);
      } else if (Array.isArray(html)) {
        el.append(...html);
      } else {
        el.insertAdjacentHTML('beforeend', html);
      }
    }
    if (attributes) {
      Object.entries(attributes).forEach(([key, val]) => {
        el.setAttribute(key, val);
      });
    }
    return el;
  }
  