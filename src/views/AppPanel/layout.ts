const gridLayout = {
  templateAreas: [
    `"header" "main" "aside"`,
    `"header" "main" "aside"`,
    `"header" "main" "aside"`,
    `"header header header"
     "main main aside"`,
  ],
  templateColumns: [
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(3, 1fr)',
  ],
  w: ['90%', '85%', '85%', '75%'],
  gap: 6,
};

export default gridLayout;
