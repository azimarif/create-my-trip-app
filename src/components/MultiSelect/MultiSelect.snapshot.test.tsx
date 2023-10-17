import { render } from '@testing-library/react';
import MultiSelect from './MultiSelect';

test('MultiSelect component snapshot', () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];
  const selectedItems = ['Option 1'];
  const placeHolder = 'Select Options';

  const { container } = render(
    <MultiSelect
      items={items}
      placeHolder={placeHolder}
      selectedItems={selectedItems}
      onChangeHandler={() => {}}
    />
  );

  expect(container).toMatchSnapshot();
});
