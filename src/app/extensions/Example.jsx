import React, { useState } from "react";
import {
  Divider,
  Link,
  List,
  Button,
  Text,
  Input,
  Flex,
  hubspot,
  DescriptionList,
  DescriptionListItem,
} from "@hubspot/ui-extensions";
import { CrmDataHighlight, CrmPropertyList } from '@hubspot/ui-extensions/crm';



// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const Extension = ({ context, runServerless, sendAlert }) => {
  const [text, setText] = useState("");

  // Call serverless function to execute with parameters.
  // The `myFunc` function name is configured inside `serverless.json`
  const handleClick = async () => {
    const { response } = await runServerless({ name: "myFunc", parameters: { text: text } });
    sendAlert({ message: response });
  };

  return (
    <>
      <Text format={{ fontWeight: "bold" }}>
        Stakeholder Card 
      </Text>

      <CrmDataHighlight
      properties={[
        'createdate',
        'lifecyclestage',
        'hs_num_open_deals',
        'hs_num_child_companies',
      ]}
    />

<CrmPropertyList
      properties={[
        'lastname',
        'email',
        'createdate',
        'address',
        'city',
        'state',
        'zip',
      ]}
      direction="row"
    />

      <Flex direction="row" align="end" gap="small">
        <Input name="text" label="Send" onInput={(t) => setText(t)} />
        <Button type="submit" onClick={handleClick}>
          Click me
        </Button>
      </Flex>
      <Divider />
      <Text>
        What now? Explore all available{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extension-components">
          UI components
        </Link>
        , get an overview of{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extensions-overview">
          UI extensions
        </Link>
        , learn how to{" "}
        <Link href="https://developers.hubspot.com/docs/platform/create-ui-extensions">
          add a new custom card
        </Link>
        , jump right in with our{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extensions-quickstart">
          Quickstart Guide
        </Link>
        , or check out our{" "}
        <Link href="https://github.com/HubSpot/ui-extensions-react-examples">
          code Samples
        </Link>
        .
      </Text>
    </>
  );
};
