import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function App(props) {
  return (
    <Card className={styles.cardStyle}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.title}</h4>
        <p className="text-tiny uppercase font-bold contain">{props.body}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.image}
          width={300}
          height={200}
        />
      </CardBody>
      <Button className={styles.btnLink}>
        <Link href={`/information/${props.id}`}>More Information</Link>
      </Button>
    </Card>
  );
}
