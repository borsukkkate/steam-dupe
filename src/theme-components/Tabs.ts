export const Tabs = {
  variants: {
    default: {
      tab: {
        color: 'blue.100',
        _selected: {
          borderBottom: '1px solid',
          borderColor: 'blue.200',
          borderTopRadius: '10px',
          color: 'blue.200',
          fontWeight: 600,
        },
        _hover: {
          color: 'blue.200',
        },
      },
    },
  },
};
