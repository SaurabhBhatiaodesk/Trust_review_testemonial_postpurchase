import {
  Image,
  useApi,
  useTranslate,
  reactExtension,
  InlineStack,
  View,
  Grid,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <Grid columns={['25%', '25%', '25%', '25%']} spacing="loose" >
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_1.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_2.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_3.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_4.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_5.webp?v=1693304528" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_6.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_7.webp?v=1693304529" />
        </View>
        <View>
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/Component_8.webp?v=1693304529" />
        </View>
      </Grid>

    </>
  );
}