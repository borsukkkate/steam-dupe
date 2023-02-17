import { describe, it } from 'vitest';
import { render } from '@/shared/helpers/test-utils';
import CommaSeparatedList from './CommaSeparatedList';

const renderButton = (props: any) =>
  render(<CommaSeparatedList {...props}>Click me</CommaSeparatedList>);

describe('CommaSeparatedList', () => {
  it('Renders the title and items', () => {
    const testProps = { title: 'Hi', listItems: ['I am here'] };
    const { getByText } = renderButton(testProps);

    expect(getByText(testProps.title)).toBeInTheDocument();
    expect(getByText(testProps.listItems[0])).toBeInTheDocument();
  });

  it('Renders list items with comma', () => {
    const testProps = { title: 'Hi', listItems: ['I am here', 'I am here'] };
    const { getByText } = renderButton(testProps);

    expect(getByText(testProps.title)).toBeInTheDocument();
    expect(getByText(testProps.listItems.join(','))).toBeInTheDocument();
  });
});
