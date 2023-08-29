import {
  Image,
  useApi,
  useTranslate,
  reactExtension,
  View,
  Grid,
  Text,
  BlockStack,
  Heading,
} from '@shopify/ui-extensions-react/checkout';
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <>
      <Grid columns={['33%', '33%', '33%']}>
        <View></View>
        <View padding="base">
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/image_2023_08_29T10_29_04_980Z.png?v=1693304962" />
        </View>
        <View></View>
      </Grid >

      <View>
        <BlockStack inlineAlignment="center">
          <Text size="large">Super hydrating and delicious without tons of sugar</Text>
          <Text>Heading</Text>
        </BlockStack>
      </View>
    </>
  );
}