export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, serviceNeeded, message } = body;

    console.log('New consultation request:', {
      fullName,
      email,
      phone,
      serviceNeeded,
      message,
      timestamp: new Date().toISOString(),
    });

    return Response.json(
      { success: true, message: 'Request received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
