<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProjectRepository;

class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("project/{reactRouting}", name="project", defaults={"reactRouting": null})
     */
    public function project()
    {
        return $this->redirectToRoute('home');
    }

     /**
     * @Route("/data/projects", name="data")
     */
    public function dataAction(ProjectRepository $projectRepository)
    {

        $result = [];
        foreach ($projectRepository->findAll() as $project) {
            $pictures = [];
            foreach($project->getPictures() as $picture) {
                $pictures[] = $picture->getName();
            }
            $result[] = [
                'id' => $project->getId(),
                'name' => $project->getName(),
                'shortDescription' => $project->getShortDescription(),
                'description' => $project->getDescription(),
                'date' => $project->getDate(),
                'pictures' => $pictures,
            ];
        }

        return new JsonResponse($result);
    }

}
