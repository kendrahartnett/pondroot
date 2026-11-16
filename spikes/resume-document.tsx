import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 45, fontFamily: "Helvetica", fontSize: 11, lineHeight: 1.5, color: "#172f2a" },
  name: { fontSize: 25, lineHeight: 1.2, marginBottom: 10, fontFamily: "Helvetica-Bold" },
  note: { fontSize: 9, lineHeight: 1.4, color: "#52645b", marginBottom: 22 },
  heading: { fontSize: 12, marginTop: 16, marginBottom: 8, fontFamily: "Helvetica-Bold" },
  bullet: { marginBottom: 9 },
  footer: { position: "absolute", bottom: 24, left: 45, right: 45, fontSize: 9, color: "#52645b" }
});
export function ResumeDocument({ bullets, long = false }: { bullets: string[]; long?: boolean }) {
  return <Document title="Synthetic résumé integration fixture" author="Capstone testing">
    <Page size="LETTER" style={styles.page} wrap>
      <Text style={styles.name}>José Rivera</Text>
      <Text style={styles.note}>FICTIONAL SAMPLE - integration testing only</Text>
      <Text style={styles.heading}>Relevant experience</Text>
      {bullets.map((bullet, i) => <View key={i} wrap={false} style={styles.bullet}><Text>- {bullet}</Text></View>)}
      {long && <Text style={styles.heading}>Additional fictional practice entries</Text>}
      {long && Array.from({ length: 18 }, (_, i) => <View key={`extra-${i}`} wrap={false} style={styles.bullet}><Text>{`Practice entry ${i + 1}: Organized supplies for a fictional community activity, checked the available materials, and explained the next preparation step to another participant.`}</Text></View>)}
      <Text style={styles.footer} fixed>Fictional sample | Capstone integration test</Text>
    </Page>
  </Document>;
}
