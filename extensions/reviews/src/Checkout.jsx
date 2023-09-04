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
  useSettings,
} from '@shopify/ui-extensions-react/checkout';
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {
    Reviews_text,
    Reviews_heading,
    img_src,
  } = useSettings();

  return (
    <>
      <Grid columns={['33%', '33%', '33%']}>
        <View></View>
        <View padding="base">
          <Image source="" />
        </View>
        <View></View>
      </Grid >

      <View>
        <BlockStack inlineAlignment="center">
          <Text size="large">{Reviews_text ? Reviews_text : "Reviews Text"}</Text>
          <Text emphasis="bold" size="extraLarge" appearance="accent">{Reviews_heading ? Reviews_heading : "Reviews Heading"}</Text>
        </BlockStack>
      </View>
    </>
  );
}