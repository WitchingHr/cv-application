const initial = [
  { name: 'general', id: 0, children:
    [
      {
        id: 0,
        name: 'This Person',
        job: 'Web Developer',
        summary: 'Lorem ipsum dolor sit amet. Et dolor possimus non officia possimus a nobis iure! Ab suscipit dolore et nisi sequi aut culpa commodi ut magni ipsam est consequatur eius et fuga optio rem quas ullam.',
        email: 'thisperson@example.com',
        phone: 1234567890
      }
    ]
  },
  { name: 'education', id: 1, children:
    [
      { 
        id: 0,
        degree: '',
        school: 'The Odin Project',
        from: 2022,
        to: 2023
      }
    ]
  },
  { name: 'experience', id: 2, children:
    [
      {
        id: 0,
        job: 'Junior Software Engineer',
        company: 'That Company',
        responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore consectetur aspernatur expedita.',
        from: 2022,
        to: 2023
      }
    ]
  },
  { name: 'skills', id: 3, children:
    [
      {
        id: 0,
        skill: 'React'
      }
    ]
  },
  { name: 'languages', id: 4, children:
    [
      {
        id: 0,
        language: 'English'
      }
    ]
  },
  { name: 'references', id: 5, children:
    [
      {
        id: 0,
        name: 'That Guy',
        job: 'Project Lead',
        company: 'That Company',
        email: 'thisguy@example.com',
        phone: '8675309'
      }
    ]
  }
];

export default initial;

const pic = {
  url: null
}

export { pic };
