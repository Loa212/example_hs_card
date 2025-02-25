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
  DateInput,
  Panel,
  PanelBody,
  PanelSection,
  PanelFooter,
} from "@hubspot/ui-extensions";
import {  CrmPropertyList } from '@hubspot/ui-extensions/crm';


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
      <CrmPropertyList
        properties={[
        'firstname',
        'lastname',
        'email',
        'phone',
        "gender",
        'createdate',
        'lifecyclestage',
        "engagements_last_meeting_booked",
        'hs_all_owner_ids'
      ]}
      direction="row"
    />

    <Divider />

    <Button
        overlay={
        <Panel id="my-panel" title="Example panel">
          <PanelBody>
            <PanelSection>
            <Text>Welcome to my panel. Thanks for stopping by!</Text>
            <Text>Close the panel by clicking the X in the top right.</Text>
            </PanelSection>
          </PanelBody>
          <PanelFooter>
          </PanelFooter>
        </Panel>
        }
      >
        Open panel
      </Button>


      <DateInput
        label="Appointment Date Uncontrolled"
        name="appointment-date"
        format="LL"
      />
    
      <Divider/>

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


const possibleProperties = [
  "address",
  "annualrevenue",
  "associatedcompanyid",
  "associatedcompanylastupdated",
  "chosen_name",
  "city",
  "closedate",
  "company",
  "company_hq_phone",
  "company_size",
  "country",
  "createdate",
  "currentlyinworkflow",
  "date_of_birth",
  "days_to_close",
  "degree",
  "department",
  "email",
  "engagements_last_meeting_booked",
  "engagements_last_meeting_booked_campaign",
  "engagements_last_meeting_booked_medium",
  "engagements_last_meeting_booked_source",
  "fax",
  "field_of_study",
  "first_conversion_date",
  "first_conversion_event_name",
  "first_deal_created_date",
  "firstname",
  "followercount",
  "founded_year",
  "gender",
  "graduation_date",
  "hs_additional_emails",
  "hs_all_accessible_team_ids",
  "hs_all_assigned_business_unit_ids",
  "hs_all_contact_vids",
  "hs_all_owner_ids",
  "hs_all_team_ids",
  "hs_analytics_average_page_views",
  "hs_analytics_first_referrer",
  "hs_analytics_first_timestamp",
  "hs_analytics_first_touch_converting_campaign",
  "hs_analytics_first_url",
  "hs_analytics_first_visit_timestamp",
  "hs_analytics_last_referrer",
  "hs_analytics_last_timestamp",
  "hs_analytics_last_touch_converting_campaign",
  "hs_analytics_last_url",
  "hs_analytics_last_visit_timestamp",
  "hs_analytics_num_event_completions",
  "hs_analytics_num_page_views",
  "hs_analytics_num_visits",
  "hs_analytics_revenue",
  "hs_analytics_source",
  "hs_analytics_source_data_1",
  "hs_analytics_source_data_2",
  "hs_associated_target_accounts",
  "hs_avatar_filemanager_key",
  "hs_buying_role",
  "hs_calculated_form_submissions",
  "hs_calculated_merged_vids",
  "hs_calculated_mobile_number",
  "hs_calculated_phone_number",
  "hs_calculated_phone_number_area_code",
  "hs_calculated_phone_number_country_code",
  "hs_calculated_phone_number_region_code",
  "hs_clicked_linkedin_ad",
  "hs_contact_enrichment_opt_out",
  "hs_contact_enrichment_opt_out_timestamp",
  "hs_content_membership_email",
  "hs_content_membership_email_confirmed",
  "hs_content_membership_follow_up_enqueued_at",
  "hs_content_membership_notes",
  "hs_content_membership_registered_at",
  "hs_content_membership_status",
  "hs_conversations_visitor_email",
  "hs_count_is_unworked",
  "hs_count_is_worked",
  "hs_country_region_code",
  "hs_created_by_conversations",
  "hs_created_by_user_id",
  "hs_createdate",
  "hs_currently_enrolled_in_prospecting_agent",
  "hs_data_privacy_ads_consent",
  "hs_date_entered_customer",
  "hs_date_entered_evangelist",
  "hs_date_entered_lead",
  "hs_date_entered_marketingqualifiedlead",
  "hs_date_entered_opportunity",
  "hs_date_entered_other",
  "hs_date_exited_customer",
  "hs_date_exited_evangelist",
  "hs_date_exited_lead",
  "hs_date_exited_marketingqualifiedlead",
  "hs_date_exited_opportunity",
  "hs_date_exited_other",
  "hs_date_exited_salesqualifiedlead",
  "hs_email_bad_address",
  "hs_email_bounce",
  "hs_email_click",
  "hs_email_customer_quarantined_reason",
  "hs_email_delivered",
  "hs_email_domain",
  "hs_email_first_click_date",
  "hs_email_first_open_date",
  "hs_email_first_reply_date",
  "hs_email_first_send_date",
  "hs_email_hard_bounce_reason",
  "hs_email_hard_bounce_reason_enum",
  "hs_email_is_ineligible",
  "hs_email_last_click_date",
  "hs_email_last_email_name",
  "hs_email_last_open_date",
  "hs_email_last_reply_date",
  "hs_email_last_send_date",
  "hs_email_open",
  "hs_email_quarantined",
  "hs_email_quarantined_reason",
  "hs_email_recipient_fatigue_recovery_time",
  "hs_enriched_email_bounce_detected",
  "hs_facebook_ad_clicked",
  "hs_facebook_click_id",
  "hs_facebookid",
  "hs_feedback_last_nps_follow_up",
  "hs_feedback_last_nps_rating",
  "hs_feedback_last_survey_date",
  "hs_marketable_reason_id",
  "hs_marketable_reason_type",
  "hs_marketable_status",
  "hs_marketable_until_renewal",
  "hs_membership_has_accessed_private_content",
  "hs_membership_last_private_content_access_date",
  "hs_merged_object_ids",
  "hs_mobile_sdk_push_tokens",
  "hs_notes_last_activity",
  "hs_notes_next_activity",
  "hs_notes_next_activity_type",
  "hs_object_id",
  "hs_object_source",
  "hs_object_source_detail_1",
  "hs_object_source_detail_2",
  "hs_object_source_detail_3",
  "hs_object_source_id",
  "hs_object_source_label",
  "hs_object_source_user_id",
  "hs_persona",
  "hs_pinned_engagement_id",
  "hs_pipeline",
  "hs_predictivecontactscore",
  "hs_predictivecontactscore_v2",
  "hs_predictivecontactscorebucket",
  "hs_predictivescoringtier",
  "hs_prospecting_agent_actively_enrolled_count",
  "hs_quarantined_emails",
  "hs_read_only",
  "hs_recent_closed_order_date",
  "hs_registered_member",
  "partner_registration_action",
  "partner_registration_domain",
  "partner_registration_expiry_date",
  "partner_registration_message",
  "partner_registration_status",
  "phone",
  "photo",
  "recent_conversion_date",
  "recent_conversion_event_name",
  "recent_deal_amount",
  "recent_deal_close_date",
  "relationship_status",
  "salutation",
  "school",
  "seniority",
  "start_date",
  "state",
  "surveymonkeyeventlastupdated",
  "website",
  "work_email",
  "zip"
]
