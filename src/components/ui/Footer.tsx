import React from "react";
import Container from "../Container";
import { connect } from "@/utils/me";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      <div className="border-t border-t-gray-300">
        <div className="flex items-center space-x-2">
          {connect.map((el, index) => {
            const Icon = el.icon;
            return (
              <Link
                key={`connect-${index}`}
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
