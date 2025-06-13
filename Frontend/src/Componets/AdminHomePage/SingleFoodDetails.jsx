import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const SingleFoodDetails = ({
    showid,
    showimg = "",
    showtitle = "",
    showprice = "",
    showdescription = "",
    action = "Edit",
    setShowDetailsStatus,
    category,
}) => {


    const [loading, setLoading] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowDetailsStatus(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const schema = z.object({
        img: z.string().nonempty("URL is required.").url("Invalid URL."),
        name: z.string()
            .nonempty("Name is required.")
            .regex(/^[a-zA-Z0-9 _&-]+$/, "Invalid name.")
            .min(3, "Invalid name.")
            .max(50, "Invalid name."),
        price: z.string()
            .nonempty("Price is required.")
            .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
                message: "Invalid price",
            })
            .transform((val) => Number(val)),
        specialNote: z.string().optional(),
        description: z.string()
            .nonempty("Description is required.")
            .min(5, "Invalid Description.")
            .max(100, "Invalid Description."),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            img: showimg.img,
            name: showtitle.name,
            price: String(showprice.price),
            description: showdescription.description,
            specialNote: ""
        },
        resolver: zodResolver(schema),
    });

    const imageUrl = watch("img");



    async function MyHandler(data) {
        setLoading(true);
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    const upid = String(showid._id)

                    switch (category) {
                        case "popular":

                            await axios.put(`http://localhost:3000/api/updatepopular/${showid._id}`, {
                                img: data.img,
                                name: data.name,
                                price: data.price,
                                description: data.description
                            });

                            break;


                        case "breakfast":

                            await axios.put(`http://localhost:3000/api/updatebreakfast/${upid}`, {
                                img: data.img,
                                name: data.name,
                                price: data.price,
                                description: data.description
                            });
                            break;

                        case "lunch":

                            await axios.put(`http://localhost:3000/api/updatelunch/${upid}`, {
                                img: data.img,
                                name: data.name,
                                price: data.price,
                                description: data.description
                            });
                            break;

                        case "dinner":

                            await axios.put(`http://localhost:3000/api/updatedinner/${upid}`, {
                                img: data.img,
                                name: data.name,
                                price: data.price,
                                description: data.description
                            });
                            break;

                        default:
                            return;
                    }

                    setTimeout(() => {
                        Swal.fire("Updated successfully!", "", "success").then(() => {
                            setShowDetailsStatus(false);
                        });
                        setLoading(false);
                    }, 200);
                } catch (err) {
                    Swal.fire({
                        title: "Updating failed",
                        text: "Please try again later.",
                        icon: "error"
                    });
                    console.error("edited error", err);
                    setLoading(false);
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    }

    return (
        <section className="fixed top-32 md:top-0 right-0 w-full min-h-screen max-h-screen bg-black/40 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <div ref={modalRef} className="relative mycontainer flex flex-col items-center justify-center bg-gray-200 rounded-sm p-6 w-full max-w-2xl">

                <button
                    onClick={() => setShowDetailsStatus(false)}
                    className="absolute top-2 right-3 text-4xl text-gray-600 hover:text-red-500 cursor-pointer"
                    title="Close"
                >
                    &times;
                </button>

                <h1 className="text-2xl sm:text-4xl font-semibold font-ibm my-2 text-gray-900">
                    Food Details
                </h1>

                <div className="flex items-center justify-center mt-2 w-24 h-24">
                    <img
                        src={imageUrl}
                        alt="food preview"
                        className="object-center object-cover w-full h-full rounded"
                    />
                </div>

                <form
                    onSubmit={handleSubmit(MyHandler)}
                    className="w-full h-full grid grid-cols-1 gap-x-8 gap-y-5 md:gap-y-3 mt-5 text-lg"
                >
                    <div>
                        <label htmlFor="Food-Image" className="block">
                            Food Image URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="Food-Image"
                            className={`p-2 outline-0 rounded bg-gray-300 w-full shadow-md ${errors.img ? "border border-red-500" : "border-0"}`}
                            {...register("img")}
                        />
                        {errors.img && (
                            <p className="text-sm text-red-500 mt-1">{errors.img.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="Food-Name" className="block">
                            Food Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="Food-Name"
                            className={`p-2 outline-0 rounded bg-gray-300 w-full shadow-md ${errors.name ? "border border-red-500" : "border-0"}`}
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="Food-Price" className="block">
                            Food Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="Food-Price"
                            className={`p-2 outline-0 rounded bg-gray-300 w-full shadow-md ${errors.price ? "border border-red-500" : "border-0"}`}
                            {...register("price")}
                        />
                        {errors.price && (
                            <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="Special-Note" className="block">
                            Special Note
                        </label>
                        <input
                            id="Special-Note"
                            className={`p-2 outline-0 rounded bg-gray-300 w-full shadow-md ${errors.specialNote ? "border border-red-500" : "border-0"}`}
                            {...register("specialNote")}
                        />
                        {errors.specialNote && (
                            <p className="text-sm text-red-500 mt-1">{errors.specialNote.message}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="Food-Description" className="block">
                            Food Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="Food-Description"
                            className={`p-2 outline-0 rounded bg-gray-300 w-full shadow-md resize-none ${errors.description ? "border border-red-500" : "border-0"}`}
                            rows={4}
                            {...register("description")}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center">
                        <button
                            title={action}
                            type="submit"
                            className={`w-full sm:w-sm py-3 px-5 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-yellow-600 cursor-pointer"} rounded outline-0 text-white font-semibold text-xl transition duration-300`}
                        >
                            {loading ? "Loading..." : action}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SingleFoodDetails;
