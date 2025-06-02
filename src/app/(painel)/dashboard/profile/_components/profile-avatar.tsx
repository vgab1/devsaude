"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import semFoto from "../../../../../../public/foto1.png";
import { Loader, Upload } from "lucide-react";
import { toast } from "sonner";
import { updateProfileAvatar } from "../_actions/update-avatar";
import { useSession } from "next-auth/react";

interface ProfileAvatarProps {
  avatarUrl: string | null;
  userId: string;
}

export function ProfileAvatar({ avatarUrl, userId }: ProfileAvatarProps) {
  const [previewImage, setPreviewImage] = useState(avatarUrl);
  const [loading, setLoading] = useState(false);

  const { update } = useSession();

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];

      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        toast.error("Formato de imagem inválido.");
        return;
      }

      const newFileName = `${userId}`;
      const newFile = new File([image], newFileName, {
        type: image.type,
      });

      const urlImage = await uploadImage(newFile);

      if (!urlImage || urlImage === "") {
        toast.error("Falha ao alterar imagem.");
        return;
      }

      setPreviewImage(urlImage);

      await updateProfileAvatar({ avatarUrl: urlImage });
      await update({
        image: urlImage,
      });

      setLoading(false);
    }
  }

  async function uploadImage(image: File): Promise<string | null> {
    try {
      toast("Estamos enviando sua imagem...");

      const formData = new FormData();

      formData.append("file", image);
      formData.append("userId", userId);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/image/upload`,
        { method: "POST", body: formData }
      );

      const data = await response.json();

      if (!response.ok) {
        return null;
      }

      toast.success("Imagem enviada com sucesso!");
      return data.secure_url as string;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48">
      <div className="relative flex items-center justify-center w-full h-full">
        <span className="absolute cursor-pointer z-[2] bg-slate-50/80 p-2 rounded-full shadow-xl">
          {loading ? (
            <Loader size={16} color="#131313" className="animate-spin" />
          ) : (
            <Upload size={16} color="#131313" />
          )}
        </span>
        <input
          type="file"
          className="cursor-pointer relative z-50 w-48 h-48 opacity-0"
          onChange={handleChange}
        />
      </div>

      {previewImage ? (
        <Image
          src={previewImage}
          alt="Foto de perfil da clinica"
          fill
          className="w-full h-48 object-cover rounded-full bg-slate-200"
          quality={100}
          priority
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
        />
      ) : (
        <Image
          src={semFoto}
          alt="Foto de perfil da clinica"
          fill
          className="w-full h-48 object-cover rounded-full bg-slate-200"
          quality={100}
          priority
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
        />
      )}
    </div>
  );
}
