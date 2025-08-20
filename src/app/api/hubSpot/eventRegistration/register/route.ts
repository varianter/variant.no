import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();

    // Extract necessary data from the request
    const { email, firstname, lastname, phone, company, recordID } = body;

    // Validation
    if (!email || !recordID) {
      return NextResponse.json(
        { error: "Email and event ID are required" },
        { status: 400 },
      );
    }

    // Prepare data for HubSpot API
    const hubspotPayload = {
      inputs: [
        {
          email,
          interactionDateTime: new Date().toISOString(),
          contactProperties: {
            firstname,
            lastname,
            phone,
            company,
          },
        },
      ],
    };

    // Get HubSpot token from environment variable
    const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!hubspotToken) {
      console.error(
        "HUBSPOT_PRIVATE_APP_TOKEN environment variable is not set",
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Make API call to HubSpot
    const hubspotResponse = await fetch(
      `https://api.hubapi.com/marketing/v3/marketing-events/${recordID}/attendance/register/email-create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      },
    );

    // Handle HubSpot API response
    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("HubSpot API error:", errorData);

      return NextResponse.json(
        { error: "Failed to register with HubSpot" },
        { status: hubspotResponse.status },
      );
    }

    const data = await hubspotResponse.json();

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      data,
    });
  } catch (error) {
    console.error("Error in event registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
