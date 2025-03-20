"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { convertFileToUrl } from "@/lib/utils";
type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

function FileUploader({ files, onChange }: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="uploaded file"
          width={1000}
          height={1000}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload__label">
            <p className="text-14-regular mb-2">
              <span className="text-green-500 "> Click to upload </span> or drag
              and drop a file here
            </p>
            <p>SVG, PNG, JPG or Gif max(800 X 400)</p>
          </div>
        </>
      )}
    </div>
  );
}

export default FileUploader;
