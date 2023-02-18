export const Containers = {
  variants: {
    main: {
      w: ['100%', '95%', '85%', '85%', '75%'],
      bg: 'blackAlpha.700',
      borderRadius: 10,
      h: '100%',
      p: 6,
      mx: 'auto',
      my: 10,
    },
    stick: {
      position: 'absolute',
      padding: 2,
      top: 0,
      background: 'blackAlpha.800',
      right: 0,
    },
    regular: {
      position: 'inherit',
    },
    page: {
      display: 'grid',
      gridTemplateAreas: [
        `"header" "main" "aside"`,
        `"header" "main" "aside"`,
        `"header" "main" "aside"`,
        `"header header header"
        "main main aside"`,
        `"header header header"
        "main main aside"`,
      ],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(3, 1fr)',
      ],
      gap: 6,
    },
    list: {
      display: 'grid',
      gap: 5,
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ],
    },
    listItem: {
      display: 'grid',
      gap: 4,
      gridTemplateAreas: [`"thumbnail" "info" "price"`],
    },
  },
};
