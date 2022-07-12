import { styled, tokenVariants } from '../../stitches.config';

const Box = styled('div', {
  minWidth: 0,
  boxSizing: 'border-box',

  variants: {
    display: {
      none: {
        display: 'none',
      },
      inline: {
        display: 'inline',
      },
      block: {
        display: 'block',
      },
      contents: {
        display: 'contents',
      },
      'list-item': {
        display: 'list-item',
      },
      'inline-block': {
        display: 'inline-block',
      },
      'inline-table': {
        display: 'inline-table',
      },
      table: {
        display: 'table',
      },
      'table-cell': {
        display: 'table-cell',
      },
      'table-column': {
        display: 'table-column',
      },
      'table-column-group': {
        display: 'table-column-group',
      },
      'table-footer-group': {
        display: 'table-footer-group',
      },
      'table-header-group': {
        display: 'table-header-group',
      },
      'table-row': {
        display: 'table-row',
      },
      'table-row-group': {
        display: 'table-row-group',
      },
      flex: {
        display: 'flex',
      },
      'inline-flex': {
        display: 'inline-flex',
      },
      grid: {
        display: 'grid',
      },
      'inline-grid': {
        display: 'inline-grid',
      },
      inherit: {
        display: 'inherit',
      },
      initial: {
        display: 'initial',
      },
      unset: {
        display: 'unset',
      },
    },
    borderRadius: tokenVariants({
      token: 'radii',
      css: value => ({
        borderRadius: value,
      }),
    }),
    m: tokenVariants({
      token: 'space',
      css: value => ({
        m: value,
      }),
    }),
    margin: tokenVariants({
      token: 'space',
      css: value => ({
        m: value,
      }),
    }),
    mx: tokenVariants({
      token: 'space',
      css: value => ({
        mx: value,
      }),
    }),
    marginX: tokenVariants({
      token: 'space',
      css: value => ({
        mx: value,
      }),
    }),
    my: tokenVariants({
      token: 'space',
      css: value => ({
        my: value,
      }),
    }),
    marginY: tokenVariants({
      token: 'space',
      css: value => ({
        my: value,
      }),
    }),
    ml: tokenVariants({
      token: 'space',
      css: value => ({
        ml: value,
      }),
    }),
    marginLeft: tokenVariants({
      token: 'space',
      css: value => ({
        ml: value,
      }),
    }),
    mr: tokenVariants({
      token: 'space',
      css: value => ({
        mr: value,
      }),
    }),
    marginRight: tokenVariants({
      token: 'space',
      css: value => ({
        mr: value,
      }),
    }),
    mt: tokenVariants({
      token: 'space',
      css: value => ({
        mt: value,
      }),
    }),
    marginTop: tokenVariants({
      token: 'space',
      css: value => ({
        mt: value,
      }),
    }),
    mb: tokenVariants({
      token: 'space',
      css: value => ({
        mb: value,
      }),
    }),
    marginBottom: tokenVariants({
      token: 'space',
      css: value => ({
        mb: value,
      }),
    }),
    p: tokenVariants({
      token: 'space',
      css: value => ({
        p: value,
      }),
    }),
    padding: tokenVariants({
      token: 'space',
      css: value => ({
        p: value,
      }),
    }),
    px: tokenVariants({
      token: 'space',
      css: value => ({
        px: value,
      }),
    }),
    paddingX: tokenVariants({
      token: 'space',
      css: value => ({
        px: value,
      }),
    }),
    py: tokenVariants({
      token: 'space',
      css: value => ({
        py: value,
      }),
    }),
    paddingY: tokenVariants({
      token: 'space',
      css: value => ({
        py: value,
      }),
    }),
    pl: tokenVariants({
      token: 'space',
      css: value => ({
        pl: value,
      }),
    }),
    paddingLeft: tokenVariants({
      token: 'space',
      css: value => ({
        pl: value,
      }),
    }),
    pr: tokenVariants({
      token: 'space',
      css: value => ({
        pr: value,
      }),
    }),
    paddingRight: tokenVariants({
      token: 'space',
      css: value => ({
        pr: value,
      }),
    }),
    pt: tokenVariants({
      token: 'space',
      css: value => ({
        pt: value,
      }),
    }),
    paddingTop: tokenVariants({
      token: 'space',
      css: value => ({
        pt: value,
      }),
    }),
    pb: tokenVariants({
      token: 'space',
      css: value => ({
        pb: value,
      }),
    }),
    paddingBottom: tokenVariants({
      token: 'space',
      css: value => ({
        pb: value,
      }),
    }),
  },
});

Box.displayName = 'Box';
export { Box };
