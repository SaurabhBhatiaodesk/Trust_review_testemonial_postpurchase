import {register} from "@shopify/web-pixels-extension";

register((api ) => {
    // Bootstrap and insert pixel script tag here
    console.log(api,"whole code");
    // Sample subscribe to page view
    
    api.analytics.subscribe("payment_info_submitted", (event) => {
      window.dataLayer.push({
        event: "payment_info_submitted",
        id: event.id,
        token: event.data.checkout.token,
        currencyCode: event.data.checkout.currencyCode,
        orderId: event.data.checkout.order.id,
        amount: event.data.checkout.totalPrice.amount,
        shipping: event.data.checkout.shippingLine.price.amount,
        tax: event.data.checkout.totalTax.amount,
        items: event.data.checkout.lineItems,
        email: event.data.checkout.email,
        phone: event.data.checkout.phone,
        first_name: event.data.checkout.shippingAddress.firstName,
        last_name: event.data.checkout.shippingAddress.lastName,
        address1: event.data.checkout.shippingAddress.address1,
        address2: event.data.checkout.shippingAddress.address2,
        city: event.data.checkout.shippingAddress.city,
        country: event.data.checkout.shippingAddress.country,
        countryCode: event.data.checkout.shippingAddress.countryCode,
        province: event.data.checkout.shippingAddress.province,
        provinceCode: event.data.checkout.shippingAddress.provinceCode,
        zip: event.data.checkout.shippingAddress.zip,
      });
    });
});


