export default function dataSetter(obj) {
  // Get property name, lowercase and use first word
  const splitName = obj.name.toLowerCase().split(' ');
  const name = splitName[0];
  
  const { data, categoryId, updatedText, id } = obj;
  
  let next = [];
  function getNext(categoryId) {
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

  getNext(categoryId);
  obj.setData(next);
}