import { chakra } from "@chakra-ui/system"
import * as React from "react"
import { Alert } from "../src/index"
import { AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react"
import { themeDecorator } from "../../story-layout/src/index";
import { Container } from "@chakra-ui/layout"

export default {
  title: "Alert",
  decorators: [themeDecorator],
}

export const Basic = () => (
  <Alert status="error" variant="solid" borderRadius="md">
    <AlertIcon />
    <AlertTitle mr={2}>Outdated</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  </Alert>
)

export const Subtle = () => (
  <Alert status="success" mx="auto" alignItems="start">
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle>Holy Smokes</AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
)

export const LeftAccent = () => (
  <Alert variant="left-accent" mx="auto" alignItems="start">
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle>Holy Smokes</AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
)

export const TopAccent = () => (
  <Alert
    variant="top-accent"
    mx="auto"
    alignItems="flex-start"
    pt="3"
    rounded="md"
  >
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle display="block" mr="2">
        Holy Smokes
      </AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
)

export const DocsExample = () => {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    </div>
  )
}
