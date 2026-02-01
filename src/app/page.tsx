import { Container, Stack, Heading, Text, Button, Card, CardBody } from '@/components';

export default function HomePage() {
  return (
    <Container size="lg">
      <Stack spacing="xl">
        <Stack spacing="md" align="center">
          <Heading as="h1" size="4xl" align="center">
            Welcome to Our Platform
          </Heading>
          <Text size="lg" color="secondary" align="center">
            Build beautiful applications with our comprehensive design system.
          </Text>
          <Stack direction="horizontal" spacing="sm">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Stack>
        </Stack>

        <Stack direction="horizontal" spacing="lg">
          <Card variant="elevated">
            <CardBody>
              <Heading as="h3" size="lg">
                Consistent Design
              </Heading>
              <Text color="secondary">
                Built with design tokens for perfect consistency across your application.
              </Text>
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardBody>
              <Heading as="h3" size="lg">
                Accessible
              </Heading>
              <Text color="secondary">
                WCAG compliant components with proper ARIA attributes and keyboard navigation.
              </Text>
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardBody>
              <Heading as="h3" size="lg">
                Responsive
              </Heading>
              <Text color="secondary">
                Mobile-first responsive design that works on any device.
              </Text>
            </CardBody>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
