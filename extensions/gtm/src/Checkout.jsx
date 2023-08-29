import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  BlockStack,
  Text,
  Image,
  Grid,
  View,
  Icon,
  Style,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {
    text,
    heading,
    img,
  } = useSettings();

  return (
    <>
      <Grid columns={['25%', 'fill', 'auto']}>
        <View padding="base">
          <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/image_2023_08_25T08_52_04_806Z-removebg-preview.png?v=1692953556" />
          {/* <Image source="ddd" /> */}
        </View>
        <View>
          <BlockStack padding="base">
            <Text size="medium"> {text ? text : "Paragraph"}</Text>
            <Grid columns={['35%', 'fill', 'auto',]}>
              <View maxInlineSize={Style.default(200)
                .when({ viewportInlineSize: { min: 'small' } }, 300)
                .when({ viewportInlineSize: { min: 'medium' } }, 400)
                .when({ viewportInlineSize: { min: 'large' } }, 800)}>
                <Image source="https://cdn.shopify.com/s/files/1/0814/4548/6910/files/image_2023_08_25T11_00_08_639Z-removebg-preview.png?v=1692968536" />
              </View>
            </Grid>
            <Text appearance="warning" size="large" emphasis='bold' > {heading ? heading : "Heading "}</Text>
          </BlockStack>
        </View>
      </Grid>
    </>
  );
}