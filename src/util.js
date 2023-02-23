export default function dataSetter(obj) {
  // Get property name, lowercase and use first word
  const splitName = obj.name.toLowerCase().split(' ');
  const name = splitName[0];
  
  const { data, category, updatedText, id } = obj;
  
  let next = [];
  
  function getNext(category) {
    let categoryId;
    switch (category) {
      case 'general':
        categoryId = 0;
        break;
      case 'education':
        categoryId = 1;
        break;
      case 'experience':
        categoryId = 2;
        break;
      case 'skills':
        categoryId = 3;
        break;
      default:
        break;
    }

    next = data.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          children: 
            category.children.map((child) => {
              if (child.id === id) {
                return {...child, [name]: updatedText};
              } else {
                return child;
              }
            })
        }
      } else {
        return category;
      }
    });
    return next;
  }

  getNext(category);
  obj.setData(next);
}