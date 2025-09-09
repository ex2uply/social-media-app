import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Tailwind,
  Img,
} from "@react-email/components";

const ResetPasswordEmail = ({
  resetLink,
  fullName,
}: {
  resetLink: string;
  fullName: string;
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="font-sans m-0 p-0 bg-gray-100">
        <Container className="w-full max-w-[600px] mx-auto p-6">
          <Section className="bg-white rounded-lg p-6 text-center">
            <div className=" mb-6">
              <Img
                src=""
                height={250}
                alt="Chatter"
              />
            </div>
            <Text className="text-2xl font-bold mb-4">
              Password Reset Request
            </Text>
            <Text className="text-base mb-4">Hi {fullName},</Text>
            <Text className="text-base mb-4">
              We received a request to reset your password. Click the button
              below to reset it:
            </Text>
            <Button
              href={resetLink}
              className="inline-block text-white bg-violet-700 py-2 px-4 text-base rounded-lg font-semibold mb-4"
            >
              Reset Password
            </Button>
            <Text className="text-sm text-gray-500">
              If you did not request this, please ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ResetPasswordEmail;
