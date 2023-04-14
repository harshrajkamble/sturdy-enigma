import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { mapBlockToArray } from '../../scripts/utilities.js';

// export default function decorate(block) {
//   /* change to ul, li */
//   const ul = document.createElement('ul');
//   [...block.children].forEach((row) => {
//     const li = document.createElement('li');
//     li.innerHTML = row.innerHTML;
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
//   });
//   ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
//   block.textContent = '';
//   block.append(ul);
// }


export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');

  const table = mapBlockToArray(block);
  table.forEach((row) => {
      const li = document.createElement('li');
      li.classList.add('cards-card-body');
      const img = row[1];
      img.classList.add('cards-card-image');
      const title = row[0];
      title.classList.add('cards-card-title');
      const content = title.outerHTML + img.outerHTML;
      li.innerHTML = content;
      ul.append(li);
  });

  ul.querySelectorAll('img').forEach((img) => img
      .closest('picture')
      .replaceWith(
          createOptimizedPicture(img.src, img.alt, false, [
              { width: '226' },
          ]),
      ));
  block.textContent = '';
  block.append(ul);
}
