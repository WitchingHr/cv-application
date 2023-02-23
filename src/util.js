export default function dataSetter(obj) {
  let name;
  switch (obj.name) {
    case 'Job Title':
      name = 'job';
      break;
    case 'Email Address':
      name = 'email';
      break;
    case 'Phone Number':
      name = 'phone';
      break;
    case 'Degree or Certificate':
      name = 'degree';
      break;
    default:
      name = obj.name.toLowerCase();
      break;
  }
  
  const data = obj.data;
  const category = obj.category;
  const text = obj.updatedText;
  const id = obj.id;
  
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
                return {...child, [name]: text};
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