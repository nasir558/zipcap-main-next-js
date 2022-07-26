import React from "react";
import Link from "next/link";

function Library() {
  return (
    <div className="block w-full bg-white quiz library">
      <h4 classes="font-medium">Downloadable resources</h4>
      <ul className="text-sm">
        <li>
          Click on each file to download or{" "}
          <Link href="#">
            <a>Download all</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Macro lenses and their use in macro photography.pdf</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Lenses categories.pdf</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Flash lights.pptx</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Library;
